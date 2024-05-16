<template>
    <div>
        <button class="button element" type="button">添加</button>
        <select class="element" id='checkedLevel' style="width:120px;height:28px;">
            <option value="1">检票闸机</option>
            <option value="2">选项2</option>
            <option value="3">选项3</option>
            <option value="4">选项4</option>
        </select>
        <select class="element" id='checkedLevel' style="width:120px;height:28px;">
            <option value="1">检票闸机</option>
            <option value="2">选项2</option>
            <option value="3">选项3</option>
            <option value="4">选项4</option>
        </select>
        <input class="element" type="number" placeholder="输入框（如果选择M/M/C）">
        <button class="button element" type="button">查询</button>
        <table>
            <thead >
            <tr>
                <th>ID</th>
                <th>通过闸机时间</th>
                <th>到达闸机时间</th>
                <th>操作</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(item, index) in tableData" :key="index">
                <td>{{ item.id }}</td>
                <td>{{ item.name }}</td>
                <td>{{ item.names }}</td>
                <td>
                    <button class="button element" @click="editItem(index)">修改</button>
                    <button class="button element" @click="deleteItem(index)">删除</button>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        name: 'Calculation',
        data() {
            return {
                tableData: [
                    { id: 1, name: 5.26,names: 6.53 },
                    { id: 2, name: 5.26, names: 5.17 },
                    { id: 3, name: 5.26, names: 5.17 },
                    { id: 4, name: 5.26, names: 5.17 },
                    { id: 5, name: 5.26, names: 5.17 },
                    { id: 6, name: 5.26, names: 5.17 },
                    { id: 7, name: 5.26, names: 5.17 },
                    { id: 8, name: 5.26, names: 5.17 },
                    { id: 9, name: 5.26, names: 5.17 },
                    { id: 10, name: 5.26, names: 5.17 },
                    { id: 11, name: 5.26, names: 5.17 },
                    { id: 12, name: 5.26, names: 5.17 },
                    // ... 更多数据
                ],
            };
        },
        methods: {
            editItem(index) {
                // 这里你可以实现编辑条目的逻辑，例如弹出一个对话框来编辑数据
                console.log("在这里实现修改弹框", index);
            },
            deleteItem(index) {
                // 这里你可以实现删除条目的逻辑
                this.tableData.splice(index,1);
            },
        },
    };
</script>

<style >
    /* 表格样式 */
    table {
        width: 100%; /* 设置表格宽度为100% */
        border-collapse: collapse; /* 合并相邻的边框 */
        margin-bottom: 20px; /* 设置表格底部外边距 */
    }

    /* 表格头部样式 */
    thead th {
        background-color: #f2f2f2; /* 设置表头背景色 */
        color: #333; /* 设置表头文字颜色 */
        padding: 10px; /* 设置表头内边距 */
        text-align: left; /* 设置表头文字对齐方式 */
        border-bottom: 1px solid #ddd; /* 设置表头底部边框 */
    }

    /* 表格数据行样式 */
    tbody td {
        padding: 10px; /* 设置数据行内边距 */
        border-bottom: 1px solid #ddd; /* 设置数据行底部边框 */
    }

    /* 表格的最后一行数据（如果需要特殊处理） */
    tbody tr:last-child td {
        border-bottom: none; /* 移除最后一行数据的底部边框 */
    }

    /* 表格的响应式样式（可选） */
    @media screen and (max-width: 600px) {
        table, thead, tbody, th, td, tr {
            display: block; /* 转换为块级元素以实现响应式布局 */
        }

        thead tr {
            position: absolute;
            top: -9999px;
            left: -9999px;
        }

        tr { border: 1px solid #ccc; }

        td {
            border: none;
            border-bottom: 1px solid #eee;
            position: relative;
            padding-left: 50%; /* 留出空间显示表头 */
        }

        td:before {
            position: absolute;
            top: 6px;
            left: 6px;
            width: 45%; /* 设置伪元素宽度为剩余空间的45% */
            padding-right: 10px;
            white-space: nowrap;
        }

        /*td:nth-of-type(1):before { content: "Header 1"; }*/
        /*td:nth-of-type(2):before { content: "Header 2"; }*/
        /*td:nth-of-type(3):before { content: "Header 3"; }*/
        /* 为每个数据列添加对应的表头伪元素内容 */
    }
</style>