import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import MealItem from '../components/MealItem';
import { useSelector } from 'react-redux';

const MealList = props => {
  const favoriteMeals = useSelector(state => state.meals.favoriteMeals);
  const renderMeals = itemData => {
    const {
      title,
      duration,
      affordability,
      complexity,
      imageURL,
      id
    } = itemData.item;
    const isFav = favoriteMeals.some(meal => (meal.id = id));
    return (
      <MealItem
        title={title}
        duration={duration}
        affordability={affordability}
        complexity={complexity}
        image={imageURL}
        onSelectMeal={() => {
          props.navigation.navigate({
            routeName: 'MealDetail',
            params: {
              mealId: id,
              mealTitle: title,
              isFav: isFav
            }
          });
        }}
      />
    );
  };
  return (
    <View style={styles.screen}>
      <FlatList
        data={props.meals}
        renderItem={renderMeals}
        style={{ width: '100%' }}
      />
    </View>
  );
};

export default MealList;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
