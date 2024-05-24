import apiControl from "./api";

function AddFoods (data){
    data = {
        nome: data.nome,
        qnt_proteina: data.qntProteina,
        valor: data.valor,
    }
   apiControl("POST",data,"/api/foods");
}

async function GetFoodsAll() {
    try {
        const data = await apiControl("GET", null, "/api/foods");
        return data;
    } catch (error) {
        console.error(error);
    }
}

function EditFoods (data){

    console.log(data)
}

function addTypeDiet(data){
    apiControl("POST",data,"/api/foods/type-diet");
}

async function GetTypeDiet() {
    try {
        const data = await apiControl("GET", null, "/api/foods/type-diet");
        return data;
    } catch (error) {
        console.error(error);
    }
}

function addUser(data){
    data = {
        login : data.login,
        senha : data.password
    }
    apiControl("POST",data,"/api/users");
}

export {AddFoods,GetFoodsAll,EditFoods,addTypeDiet,GetTypeDiet,addUser};