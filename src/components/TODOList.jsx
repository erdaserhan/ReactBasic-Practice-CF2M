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
                <svg>
                    <circle cx="11.998" cy="11.998" fillRule="nonzero" r="9.998" />
                </svg>
                <p>{ item?.title}</p>
            </button>
        </li>
    );
}