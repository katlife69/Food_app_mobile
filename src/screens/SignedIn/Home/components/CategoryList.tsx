import {FlatList, Image, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
interface ListDataype {
  id: number;
  name: string;
  image: string;
}

const CategoryList = () => {
  const [dataList, setDataList] = useState<ListDataype[]>([]);
  useEffect(() => {
    axios
      .get('http://localhost:8088/categories/getAllCategories')
      .then(data => {
        setDataList(data.data.data);
      });
  }, []);
  const renderItem = ({item, index}: {item: ListDataype; index: number}) => (
    <View className={index ? 'ml-2 ' : ''}>
      <Image source={{uri: item.image}} className="w-24 h-24 rounded-md" />
      <Text className="text-white absolute left-1 bottom-1 font-bold">
        {item.name}
      </Text>
    </View>
  );
  return (
    <>
      <FlatList
        data={dataList}
        renderItem={renderItem}
        horizontal
        keyExtractor={(item: ListDataype) => item.id + ''}
      />
    </>
  );
};

export default CategoryList;
