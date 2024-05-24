import React, {useState,useEffect, useContext} from 'react'
import { FlatList, View } from 'react-native';
import { GetFoodsAll } from '../../services/requests';
import Foods from './foods';
import { UpdateContext } from '../Context';
import styles from './styles';

export default function ListFoodsAdd() {
    
    const {updateKey} = useContext(UpdateContext)
    const [foods, setFoods] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        async function fetchData() {
            const result = await GetFoodsAll();
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


