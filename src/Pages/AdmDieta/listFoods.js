import React, {useState,useEffect} from 'react'
import { FlatList, View ,Text} from 'react-native';
import { GetFoodsAll } from '../../services/requests';
import Foods from './foods';

export default function ListFoods({ updateKey }) {
    
    
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
        <View>
            <View>
                <FlatList
                data={foods}
                keyExtractor={item => String(item.id)}
                renderItem={({ item }) => <Foods data={item}/>}
                onEndReached={handleLoadMore}
                onEndReachedThreshold={0.1}
                />
            </View>
        </View>
    )
}


