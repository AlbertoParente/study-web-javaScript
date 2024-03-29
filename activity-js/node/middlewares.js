// Middleware pattern (chain of responsibility)
const step1 = (ctx, next) => {
    ctx.step1 = 'mid1'
    next()
}

const step2 = (ctx, next) => {
    ctx.step2 = 'mid2'
    next()
}

const step3 = ctx => ctx.value3 = 'mid3'

const exec = (ctx, ...middlewares) => {
    const execStep = index => {
        middlewares && index < middlewares.length &&
            middlewares[index](ctx, () => execStep(index + 1))
    }
    execStep(0)
}

const ctx = {}

exec(ctx, step1, step2, step3)
console.log(ctx)
