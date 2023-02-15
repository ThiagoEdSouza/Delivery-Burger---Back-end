# Project Delivery Burger - Back end - Node.JS

<h3>Aplicação responsável por fazer o cadastro dos pedidos de uma hamburgueria, utilizando Node e Express.</h3>


<h2>Rotas</h2>
<h4>
POST /order: A rota recebe o pedido do cliente, informações como o nome do cliente e o valor do pedido são passadas dentro do corpo(body) da requisição, 
e com essas informações o novo pedido é registrado dentro de um array no seguinte formato: 
<br/>
<br/>
{ 
<br/>
id: "ac3ebf68-e0ad-4c1d-9822-ff1b849589a8",
<br/>
order: "X- Salada, 2 batatas grandes, 1 coca-cola",
<br/>
clientName:"José",
<br/>
price: 44.50,
<br/>
status:"Em preparação"
<br/>
}
<br/>
<br/>

O ID é gerado pelo usuário, dentro do código utilizando UUID V4, assim que o pedido é criado, e o status de "Em preparação" é criado automaticamente.

</h4>

<br/>
<br/>

<h3> Rotas Utilizadas no Projeto</h3>
<br/>
<br/>
<h4>
GET /order: Rota que lista todos os pedidos já feitos.
<br/>

PUT /order/:id: Rota que altera um pedido já feito. O id do pedido é enviado nos parâmetros da rota.
<br/>

DELETE /order/:id: Rota que deleta um pedido já feito com o id enviado nos parâmetros da rota.
<br/>

GET /order/:id: Rota que recebe o id nos parâmetros e retorna um pedido específico.
<br/>

PATCH /order/:id: Rota que recebe o id nos parâmetros e assim que ela é chamada, altera o status do pedido recebido pelo id para "Pedido Pronto".
<br/>

<br/>
<br/>


</h4>
