export default function TODOList() {
    return (
        <ol className="todo_list">
            {/*<li></li>*/}
        </ol>
    )
}

function Item({ item }) {
    return (
        <li id="{item?.id}" className="todo_item">
            <button className="todo_items_left">
                
            </button>
        </li>
    );
}