import React, {Component} from 'react';
import './drag.css';
import {getRandomUUID} from "../../utils/get-random-uuid";

const list = [];
for (let i = 0; i < 10; i++) {
    list.push({
        id: getRandomUUID(8),
        text: `Item ${i + 1}`
    });
}

class Drag extends Component {
    draggingElement = null;
    state = {
        list,
        // dragging: false,
        draggingElementIndex: -1,
    };

    getNewList = (arr, startIndex, toIndex) => {
        const copyArr = arr.slice();
        const dragItem = copyArr.splice(startIndex, 1)[0];
        // splice 方法新增元素时，是在索引位置"前面"开始新增，而不是从索引位置"后面"开始新增
        copyArr.splice(toIndex, 0, dragItem);
        return copyArr;
    };

    handleItemDragStart = (ev, draggingElementIndex) => {
        this.draggingElement = ev.currentTarget;
        this.setState({
            draggingElementIndex
        })
    };

    handleItemDragOver = (ev, targetElementIndex) => {
        ev.preventDefault();
        const {draggingElementIndex, list} = this.state;
        if (targetElementIndex !== draggingElementIndex) {
            // const targetElement = ev.currentTarget;
            this.setState({
                list: this.getNewList(list, draggingElementIndex, targetElementIndex),
                draggingElementIndex: targetElementIndex,
            });
        }
    };

    handleItemDrop = (ev) => {
        ev.preventDefault();
        this.draggingElement = null;
        this.setState({
            draggingElementIndex: -1
        });
    };

    getDraggingStyle(index) {
        const {draggingElementIndex} = this.state;
        if (index !== draggingElementIndex) return {};
        return {
            backgroundColor: '#eee',
            opacity: 0.6,
        };
    }

    render() {
        return (
            <ul className="drag-container">
                {this.state.list.map((item, i) => {
                    // 这里如果用 i 作为 key 的话，可能性能消耗会比较大，最好用 id 来作为 key
                    const {id, text} = item;
                    return (<li
                        key={id}
                        draggable={true}
                        onDragStart={(ev) => {
                            this.handleItemDragStart(ev, i);
                        }}
                        onDragOver={(ev) => {
                            this.handleItemDragOver(ev, i);
                        }}
                        onDrop={(ev) => {
                            this.handleItemDrop(ev);
                        }}
                        style={this.getDraggingStyle(i)}
                    >
                        {text}
                    </li>)
                })}
            </ul>
        );
    }
}

export default Drag;