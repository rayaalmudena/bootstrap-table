var $table = $('#table')
$(function () {
    $('#table').bootstrapTable()
})

function dataFormatter(timestamp) {
    var date = new Date(timestamp);
    return date.toLocaleDateString();
}

function cellStyle(value, row, index) {


    if (value > 10000) {
        
        return {
           
                classes: "bg-warning"
            
        }
    }
    return {
        
            classes: 'bg-success'
        
    }
}

document.querySelector("#submit").addEventListener("click", addCountry);

function addCountry(e) {
    e.preventDefault();
    let country = document.querySelector("#inputCountry").value;
    let urlJSON = document.querySelector("#table").getAttribute("data-url");
    document.querySelector("#table").setAttribute("data-url", urlJSON + "," + country);
    $("#table").bootstrapTable('refresh', { url: urlJSON + "," + country });

}

$(function () {
    $('#toolbar').find('select').change(function () {
        $table.bootstrapTable('destroy').bootstrapTable({
            exportDataType: $(this).val(),
            exportTypes: ['json', 'xml', 'csv', 'txt', 'sql', 'excel', 'pdf'],
            columns: [
                {
                    field: 'state',
                    checkbox: true,
                    visible: $(this).val() === 'selected'
                },
                {
                    field: 'country',
                    title: 'País'
                }, {
                    field: 'population',
                    title: 'Población total'
                }, {
                    field: 'activePerOneMillion',
                    title: 'Casos activos por millón de habitantes'
                }, {
                    field: 'updated',
                    title: 'Última fecha de datos actualizados'
                }
            ]
        })
    }).trigger('change')
})