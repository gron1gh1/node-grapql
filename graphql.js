const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const {buildSchema} = require('graphql');

const app = express();

const schema = buildSchema(`
	type Query {
		hello: String
	}
`)
const root = {
	hello: ()=>{
		return 'Hello World';
	}
}

app.use('/graphql', graphqlHTTP({
	schema: schema,
	rootValue: root,
	graphiql: true,
}))

app.listen(3000,()=> console.log('listen 3000 port!'))


// 나중 참조
// https://velog.io/@gwak2837/Apollo-Server%EB%A1%9C-GraphQL-API-%EC%84%9C%EB%B2%84-%EA%B0%9C%EB%B0%9C%ED%95%98%EA%B8%B0-1
