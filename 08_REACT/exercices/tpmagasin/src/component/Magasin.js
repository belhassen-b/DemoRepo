import { Component } from 'react';
import { Panier } from './Panier';
import { Produit } from './Produit';

export class Magasin extends Component {
        constructor(props){
            super(props)
            this.state = {
                produits : [{
                    id : 1,
                    titre : "Haribo",
                    prix : 2.99,
                    description : "des bonbons"
                },{
                    id : 2,
                    titre : "Ricola",
                    prix : 3.99,
                    description : "encore des bonbons sans gout"
                },{
                    id : 3,
                    titre : "Dragibus",
                    prix : 4.5,
                    description : "des bonbons plutot bon"
                }],
                panier : []
            }
        }

        addProduitPanier = (id) => {
            console.log("j'ajoute le produit avec l'id : "+id)
            // const tmpProduits = [...this.state.produits]
            // const tmpPanier = [...this.state.panier]
            // tmpProduits.forEach(p => {
            //     if(p.id == id){
            //         tmpPanier.push(p)
            //     }
            // })
            // console.log(tmpPanier)
            // this.setState({ panier : [...tmpPanier]})
            const tmpState = {...this.state}
            tmpState.produits.forEach(p => {
                if(p.id == id){
                  //  tmpState.panier.push(p)
                  //  tmpState.panier.forEach(pro => {
                        if((tmpState.panier.find(prod => prod.id == p.id) == null)){
                            tmpState.panier.push(p)
                        }
                   // })
                }
            })
            console.log(tmpState.panier)
            this.setState({...tmpState})
        }

        render() {

            return (
                <>
                <h1>Bienvenue dans le magasin</h1>

                    <h2>Produits disponible :</h2>
                        {this.state.produits.map((p) => (<Produit key={p.id} produit={p} addProduitPanier={this.addProduitPanier}></Produit>))}
                        {/* {this.state.produits.map((p,i) => (<Produit key={i} produit={p}></Produit>))} */}
                    <h2>Mon Panier :</h2>
                     {this.state.panier.map((p) => (<Panier key={p.id} panier={p}></Panier>))} 
                    {/* {this.state.panier.map((p,i) => (<Panier key={i} panier={p}></Panier>))} */}

                </>
            )
        }
}