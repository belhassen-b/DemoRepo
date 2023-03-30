import { StyleSheet, Text, View, ScrollView, Image, Button } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { MEALS } from '../data/data';
import MealDetails from '../components/MealDetails';
import List from '../components/List';
import Subtitle from '../components/Subtitle';
import { useDispatch, useSelector } from 'react-redux';
import { addIds, removeIds } from '../store/redux/favorites';
import IconHeader from '../components/IconHeader';

export default function MealsDetailScreen({ navigation, route }) {
    const mealId = route.params.mealId;
    const myMeal = MEALS.find((meal) => meal.id == mealId)
    const dispatch = useDispatch()
    const favoriteMeals = useSelector((state) => state.fav.ids) // recup de tous mes id en favoris
    const mealIsfavorite = favoriteMeals.includes(mealId)


    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight : () => {
                return (
                    <IconHeader isfav={!mealIsfavorite} onPress={addOrRemove}/>
                )
            }
        })
    },[navigation,mealIsfavorite])

    function addOrRemove(){
        if(!mealIsfavorite){
            return  dispatch(addIds({ id : myMeal.id}))
        }else {
            return  dispatch(removeIds({ id : myMeal.id}))
        }
    }


    function buttonType(){
        if(!mealIsfavorite){
            return <Button title='Like' onPress={() => dispatch(addIds({ id : myMeal.id}))}/>
        }else {
            return <Button title='UnLike' onPress={() => dispatch(removeIds({ id : myMeal.id}))}/>
        }
    }

    return (
        <ScrollView style={styles.rootContainer}>
            <Image style={styles.image} source={{ uri: myMeal.imageUrl }} />
            <Text style={styles.title}>{myMeal.title}</Text>
            <MealDetails
                duration={myMeal.duration}
                complexity={myMeal.complexity}
                affordability={myMeal.affordability}
                textStyle={styles.detailText}
            />
            {/* <Button title='Like' onPress={() => console.log(myMeal.id)}/> */}
            {/* <Button title='Like' onPress={() => dispatch(addIds({ id : myMeal.id}))}/> */}
           {buttonType()}
            <View style={styles.listOuterContainer}>
                <View style={styles.listContainer}>
                    <Subtitle>Ingredients</Subtitle>
                   <List data={myMeal.ingredients} /> 
                    <Subtitle>Steps</Subtitle>
                     <List data={myMeal.steps} /> 
                </View>
            </View>
        </ScrollView>
        
    )
}

const styles = StyleSheet.create({
    rootContainer: {
        marginBottom: 32,
    },
    image: {
        width: '100%',
        height: 350,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        margin: 8,
        textAlign: 'center',
        color: 'black',
    },
    detailText: {
        color: 'white',
    },
    listOuterContainer: {
        alignItems: 'center',
    },
    listContainer: {
        width: '80%',
    },
})