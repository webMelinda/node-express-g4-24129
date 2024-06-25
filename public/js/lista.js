let dataTable;
let dataTableIsInizialized= false;

const dataTableOptions ={
    // pageLength: 3,
    scrollX: true,
    lengthMenu: [5, 10, 25, 50, 75, 100],
    destroy: true,   
    columnDefs: [
        { className: "center", targets: [0] },
        { orderable: false, targets: [2, 3, 4] }
    ],
    language: {
        lengthMenu: "Mostrar _MENU_ registros por página",
        zeroRecords: "Ningún usuario encontrado",
        info: "Mostrando de _START_ a _END_ de un total de _TOTAL_ registros",
        infoEmpty: "Ningún usuario encontrado",
        infoFiltered: "(filtrados desde _MAX_ registros totales)",
        search: "Buscar:",
        loadingRecords: "Cargando...",
        paginate: {
            first: "Primero",
            last: "Último",
            next: "Siguiente",
            previous: "Anterior"
        }
    }
}

const initDataTable=async()=>{
    if(dataTableIsInizialized){
        dataTable.destroy();
    }

    await listUsers();

    dataTable=$("#datatable_users").DataTable(dataTableOptions);

    dataTableIsInizialized = true;

};

const listUsers=async() =>{
    try{
        const response=await fetch("https://jsonplaceholder.typicode.com/users");
        const users= await response.json();
        let content= ``;
        users.forEach((user,index) => {
            content+= `<tr>
            <td>${index + 1}</td>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.address.city}</td>
            <td>${user.company.name}</td>
            </tr>`;
            
        });
        tableBody_users.innerHTML=content;
    } catch(ex){
        alert(ex);
    }
};



window.addEventListener("load", async()=>{
    await initDataTable();
});