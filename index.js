const { request, response } = require('express')
const express = require('express')
const app = express()
app.use(express.json())

const uuid = require('uuid')

const port = 3050

const orders = [] //Somente para fins didáticos, as informações serão guardadas em uma váriável.

const firstMiddleware = (request,response,next) => {

    const { id } = request.params
    const index = orders.findIndex(idOrder => idOrder.id === id)
    if (index < 0) {
        return response.status(404).json({ message: "User not found" })
    }
    request.orderIndex = index
    request.orderID = id
    
    next()    
}

const secondMiddleWare = (request, response, next) => {
    console.log(request.method)
    console.log(request.url)
    next()
}


app.post('/orders', (request,response) =>{
    const { order, clientName, price } = request.body

    const idOrder = { id: uuid.v4(), order,clientName, price, "status":"Em preparação" }

    orders.push(idOrder)

    return response.status(201).json(idOrder)
})

app.get('/orders', secondMiddleWare, (request,response) =>{
    return response.json(orders)
})

app.put('/orders/:id', firstMiddleware, secondMiddleWare, (request, response) =>{
    const index = request.orderIndex
    const  id  = request.orderID
    const { order, clientName, price } = request.body

    const updatedOrder = { id, order, clientName, price, "status":"Em preparação" }

    orders [index] = updatedOrder

        return response.json(updatedOrder)
    })

app.delete('/orders/:id', firstMiddleware, secondMiddleWare, (request, response) =>{    
    const index = request.orderIndex
    orders.splice (index,1)

    return response.status(204).json()
})

app.patch('/orders/:id', firstMiddleware, secondMiddleWare, (request, response) =>{
    const index = request.orderIndex
    const order = orders[index]

    order.status = "Pedido Pronto."
        return response.json(order)
})

app.get('/orders/:id', firstMiddleware, secondMiddleWare, (request, response) =>{
    const index = request.orderIndex

    return response.send(orders [index])
})

app.listen(3050, () =>{
    console.log(`🚀 Server started in port: ${port}`)
})