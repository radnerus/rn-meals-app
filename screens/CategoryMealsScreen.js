import React from 'react';
import { CATEGORIES } from '../data/dummy-data';
import MealList from '../components/MealList';
import { useSelector } from 'react-redux';
import { View, StyleSheet } from 'react-native';
import DefaultText from '../components/DefaultText';

const CategoryMealsScreen = props => {
  const categoryId = props.navigation.getParam('categoryId');
  const availableMeals = useSelector(state => state.meals.filteredMeals);

  const meals = availableMeals.filter(meal =>
    meal.categoryIds.includes(categoryId)
  );

  if (meals.length === 0) {
    return (
      <View style={styles.content}>
        <DefaultText>No Meals found, maybe check your filters?</DefaultText>
      </View>
    );
  }

  return <MealList meals={meals} navigation={props.navigation} />;
};

CategoryMealsScreen.navigationOptions = navigationData => {
  const categoryId = navigationData.navigation.getParam('categoryId');

  const selectedCategory = CATEGORIES.find(c => c.id === categoryId);

  return {
    headerTitle: selectedCategory.title
  };
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default CategoryMealsScreen;
