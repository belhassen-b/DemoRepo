/*
  Lorsque l'on veut faire des classes en Typescript, il nous faut modifier un peu la syntaxe

  Première chose : Il va nous falloir ajouter des niveaux d'accessibilité à nos attributs : 
    - public : L'attribut / la méthode sera accessible à tous, que cela soit dans la classe, dans les classes enfants, dans les autres classes
    - protected: L'attribut / la méthode sera accessible à notre classe et à ses enfants
    - private : L'attribut / la méthode ne sera accessible que dans la classe
    - readonly: L'attribut sera constant une fois assigné. Il faudra lui affecter une valeur dans le constructeur. Par la suite, il sera publique pour la lecture mais ne pourra pas être modifié

  A côté de cela, le Typescript permet la création d'attributs / de méthodes 'static'. Ces attributs / méthodes seront 
  disponibles via la syntaxe <Nom de la classe>.<Nom de l'attribut ou de la méthode> 
  et non de <Nom d'un objet>.<Nom de l'attribut ou de la méthode>

  Les attributs statiques sont particulièrement utiles pour faire un compteur d'éléments créé de cette classe. 
*/

class Person {
  private static _count: number = 0
  private _id: number;
  private _firstname: string;
  private _lastname: string;
  private _age: number;
  readonly numeroIdNat: number;

  constructor(firstname: string, lastname: string, age: number, numeroIdNat: number) {
    this._id = ++Person._count
    this._firstname = firstname
    this._lastname = lastname
    this._age = age
    this.numeroIdNat = numeroIdNat
  }

  // En Typescript, il est possible de créer des getter / setter pour modifier les attributs privés / protégés

  // Ces getters / setters sont par défaut 'public' mais il est possible de leur affecter un niveau d'accessibilité propre
  get firstname() {
    return this._firstname
  }

  set firstname(value: string) {
    if (value !== "Blabla") {
      this._firstname = value
    }
  }

  get fullname() {
    return this._firstname + " " + this._lastname
  }

  static get count() {
    return Person._count
  }
}

class PersonB {
  private static _count: number = 0
  private _id: number;

  // Via le Typescript, on peut réduire la syntaxe d'un constructeur de la sorte : 

  // Ici, on aura automatiquement création et affectation de : 
  // private _firstname, private _lastname, private _age, readonly numeroIdNat
  // this._firstname = _firstname, ...

  constructor(private _firstname: string, private _lastname: string, private _age: number, readonly numeroIdNat: number) {
    this._id = ++PersonB._count
  }

  get firstname() {
    return this._firstname
  }

  set firstname(value: string) {
    if (value !== "Blabla") {
      this._firstname = value
    } else if (value.split(" ").length > 1) {
      this._firstname = value.split(" ").join("-")
    }
  }

  get fullname() {
    return this._firstname + " " + this._lastname
  }

  set lastname(value: string) {
    this._lastname = value.toUpperCase()
  }

  static get count() {
    return PersonB._count
  }
}

let albert = new Person("Albert", "DUPONT", 45, 54545546)
albert.firstname = "Blabla"
console.log(albert.fullname);
console.log(albert.numeroIdNat);
console.log(`Il y a actuellement ${Person.count} personnes`);

export {Person, PersonB}