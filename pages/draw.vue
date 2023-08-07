<template>
  <div>
    <canvas ref="canvasRef"></canvas><br>
    <input type="range" min="1" max="5" v-model="ctxRef.lineWidth">
    <input type="range" min="0" max="300" step="10" v-model="throttle">
  </div>
</template>
<script setup>
import { concat, fromEvent } from "rxjs"
import { map, debounceTime, switchMap, takeUntil, throttleTime, filter, takeLast, take, finalize, distinct, auditTime, distinctUntilChanged } from "rxjs/operators"

class Path {
  points = []
  vectors = []
  controlVectors = []
  ctx = undefined
  constructor(ctx) {
    this.ctx = ctx
  }

  addPoint(point) {
    const lastPoint = this.points.at(-1)
    this.points.push(point)

    if (lastPoint) {
      const vector = {
        x: point.x - lastPoint.x,
        y: point.y - lastPoint.y
      }
      const lastVector = this.vectors.at(-1)
      this.vectors.push(vector)
      this.controlVectors.pop()
      if (lastVector) {
        const controlVector = {
          x: (vector.x + lastVector.x) / 2,
          y: (vector.y + lastVector.y) / 2
        }
        this.controlVectors.push(controlVector)
      } else {
        this.controlVectors.push(vector)
      }
      this.controlVectors.push(vector)
    }
  }
  drawHermitCurve(point1, point2, controlVector1, controlVector2) {
    const ctx = this.ctx
    const x0 = point1.x;
    const y0 = point1.y;
    const x1 = point2.x;
    const y1 = point2.y;
    const dx0 = controlVector1.x;
    const dy0 = controlVector1.y;
    const dx1 = controlVector2.x;
    const dy1 = controlVector2.y;

    ctx.moveTo(x0, y0);

    const steps = 50; // количество шагов

    const hx0 = -3 * x0 + 3 * x1 - 2 * dx0 - 1 * dx1;
    const hx1 = 2 * x0 - 2 * x1 + dx0 + dx1;
    const hy0 = -3 * y0 + 3 * y1 - 2 * dy0 - 1 * dy1;
    const hy1 = 2 * y0 - 2 * y1 + dy0 + dy1;

    for (let i = 0; i < steps; i++) {
      const t = i / (steps - 1);
      const t2 = t ** 2;
      const t3 = t2 * t;

      const x = x0 + dx0 * t + hx0 * t2 + hx1 * t3;
      const y = y0 + dy0 * t + hy0 * t2 + hy1 * t3;

      ctx.lineTo(x, y);
    }

  }
  draw() {
    const { points, controlVectors, ctx } = this;

    if (points.length < 2) return; // проверяем, что массив точек содержит хотя бы 2 точки

    ctx.beginPath();
    ctx.moveTo(points[0].x, points[0].y);

    for (let i = 0; i < points.length - 1; i++) {
      const point1 = points[i];
      const point2 = points[i + 1];
      const controlVector1 = controlVectors[i];
      const controlVector2 = controlVectors[i + 1];

      this.drawHermitCurve(point1, point2, controlVector1, controlVector2);
    }

    ctx.stroke();
  }
}

const canvasRef = ref()
const throttle = ref(100)
const ctxRef = ref({ lineWidth: 3 })

onMounted(() => {
  const canvas = canvasRef.value
  const ctx = canvas.getContext('2d')
  ctxRef.value = ctx
  const rect = canvas.getBoundingClientRect()
  const scale = window.devicePixelRatio

  canvas.width = rect.width * scale
  canvas.height = rect.height * scale
  ctx.scale(scale, scale)
  ctx.lineWidth = 3

  const mouseMove$ = fromEvent(canvas, "mousemove")
  const mouseDown$ = fromEvent(canvas, "mousedown")
  const mouseUp$ = fromEvent(canvas, "mouseup")
  const keydown$ = fromEvent(document, "keydown")

  const objects = [new Path(ctx)]

  const draw$ = mouseDown$.pipe(
    switchMap(() => {
      objects.push(new Path(ctx))
      const sharedMouseMove$ = mouseMove$.pipe(
        map(({ offsetX, offsetY }) => ({ x: offsetX, y: offsetY })),
        distinctUntilChanged()
      );
      return concat(
        sharedMouseMove$.pipe(throttleTime(throttle.value), takeUntil(mouseUp$)),
        sharedMouseMove$.pipe(take(1),finalize())
      );
    }
    )
  )
  draw$.subscribe({
    next(point) {
      console.log(point)
      objects.at(-1).addPoint(point)
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      objects.map(object => object.draw())
    }
  })


  keydown$.pipe(
    filter(({ code, ctrlKey }) => ctrlKey && code == "KeyZ")
  ).subscribe(() => {
    console.log(objects)
    objects.pop()
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    objects.map(object => object.draw())
  })
})

</script>
<style>
canvas {
  border: 1px solid black;
  width: 80vw;
}
</style>