function List(){
    const fruit = [ "apple" ,"banana" , 
        "cherry" , "date" ] 
fruit.sort()
const listItem= fruit.map(fruit=><li>{ fruit}
</li>)

 return(<ul>{listItem}</ul>);


}

export default List;