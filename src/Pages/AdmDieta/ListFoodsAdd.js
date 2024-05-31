import React, {useState,useEffect, useContext} from 'react'
import { FlatList, View } from 'react-native';
import { GetFoodsIdUsers } from '../../services/requests';
import Foods from './foods';
import { UpdateContext } from '../Context';
import styles from './styles';
import { objectUser} from '../Context/objectUser'

export default function ListFoodsAdd() {
    
    const {updateKey} = useContext(UpdateContext)
    const [foods, setFoods] = useState([]);
    const [page, setPage] = useState(1);
    const { objUser } = useContext(objectUser);

    useEffect(() => {
        async function fetchData() {
            const result = await GetFoodsIdUsers(objUser.id);
            setFoods(result);
        }
        fetchData();
    }, [page,updateKey]);

    function handleLoadMore() {
        setPage(page + 1);
    }

    return(
        <View style={styles.containerFlatList}>
            <FlatList
            data={foods}
            keyExtractor={item => String(item.id)}
            renderItem={({ item }) => <Foods data={item}/>}
            onEndReached={handleLoadMore}
            onEndReachedThreshold={0.1}
            />
        </View>
        
    )
}


