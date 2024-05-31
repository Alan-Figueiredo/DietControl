import apiControl from "./api";



function AddFoods (data){
    
    data = {
        nome: data.nome,
        qnt_proteina: data.qntProteina,
        valor: data.valor,
        id_users: data.objUser
    }
    
   apiControl("POST",data,"/api/foods");
}

async function GetFoodsIdUsers(id_users) {
    try {
        const data = await apiControl("GET", null, `/api/foods/${id_users}`);
        return data;
    } catch (error) {
        console.error(error);
    }
}

function addTypeDiet(data){
    apiControl("POST",data,"/api/foods/type-diet");
}

async function GetTypeDiet(id_users) {
    
    try {
        const data = await apiControl("GET", null, `/api/foods/type-diet/${id_users}`);
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
    return apiControl("POST",data,"/api/users");
}

async function loginUsers(data){
    const response = await apiControl("POST",data,"/api/users/login");
    return response
}



export {AddFoods,GetFoodsIdUsers,addTypeDiet,GetTypeDiet,addUser,loginUsers};