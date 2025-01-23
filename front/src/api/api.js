async function Api(){
const data = await fetch("http://localhost:8080")
if(!data){
    console.log("Erro na requisição do front para o back")
}
const dataJson = data.json()
return dataJson

}

export default Api