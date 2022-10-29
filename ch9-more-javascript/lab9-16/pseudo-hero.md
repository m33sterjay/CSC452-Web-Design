# Modifications to webpage

---

-   Create _SuperHero_ and _SuperVillain_ classes that extend the **_ SuperHuman _** class

    -   both classes need a [constructor] that has:
        -   `name`, `alias`, and `powerLevel`
        -   [constructor] should call the parent class' [constructor] with the given `name` and `powerLevel`

-   Add a _battle()_ method to the _SuperHero_ class that has a _Supervillain_ parameter.

    -   _battle()_ should return `true` if the hero's `powerLevel` is >= the villians, `false` otherwise

-   Add an **_ getEvilChuckle() _** method to the _SuperVillain_ class that returns the string `"Ha ha ha!"`
-   Modify **selectionChanged()** to call the selected hero's _battle()_ method, passing in the selected villain. - Display the battle winner's alias in the winner paragraph
    **_ When complete, web page will show the winner between the selected hero and villain _**

# Pseudo-code

---

-   Create _SuperHero_ && _SuperVillian_ classes
    // class {} extends {}
    // constructor(name, alias, powerLevel)
    // super(name, powerLevel)
    // this.alias = {}
    **test**

-   Add _battle()_ method to new classes
    // _SuperVillain_ parameter
    // if hero's powerLevel is >= villains, `true`, else `false`
    **test**

-   Add **_ getEvilChuckle() _** to _SuperVillain_ class
    // returns string `"Ha ha ha!"`
    **test**

-   Modify **selectiongChanged()**
    // call the hero's _battle()_ method w/ selected villain
    // display winner's alias in the `winner` paragraph
    **test**
