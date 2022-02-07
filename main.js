$(document).ready(function () {
    var sample_data = `[
        {"name": "Louis Born", "email": "louis.born@gmail.com", "tag": ["Test", "Noch ein Test"]}, 
        {"name": "Max Mustermann", "email": "max.mustermann@gmail.com", "tag": ["Test"]}, 
        {"name": "Michael Meier", "email": "michael.meier@gmail.com", "tag": ["Test", "Noch ein Test", "Noch ein weiterer Test"]},
        {"name": "Fritz Müller", "email": "fritz.mueller@gmail.com", "tag": ["Test", "Noch ein Test"]},
        {"name": "Marco Mendes", "email": "marco.mendez@gmail.com", "tag": ["Test", "Noch ein Test"]},
        {"name": "Maria Navez", "email": "maria.navez@gmail.com", "tag": ["Test", "Noch ein Test", "Noch ein weiterer Test", "Sogar ganz viele Tests"]}
    ]`;


    loadAndParseSampleData(sample_data);
    
});

function loadAndParseSampleData(sample) {
    var result = JSON.parse(sample);
            
    $('table.m-table tbody').append(parseObj(result));

    function parseObj(obj) {
        var toAppend = '';

        obj.forEach(function (index) {
            var tags_list = '';

            index.tag.forEach(function (i) {
                tags_list += `<li><div class="a-chip">${i}</div></li>`;
            });

            toAppend += `
            <tr>
                <td>${index.name}</td>
                <td>${index.email}</td>
                <td>
                    <ul class="list-for__a-chip">
                        ${tags_list}
                    </ul >
                </td>
                <td><i class="fas fa-pen a-button -withIcon"></td>
                <td><i class="far fa-trash-alt a-button -withIcon"></i></td>
            </tr >`;            
        });
        return toAppend;
    }
}