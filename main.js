$(document).ready(function () {
    var sample_data = `[
        {"name": "Louis Born", "email": "louis.born@gmail.com", "tag": ["Test", "Noch ein Test"]}, 
        {"name": "Max Mustermann", "email": "max.mustermann@gmail.com", "tag": ["Test"]}, 
        {"name": "Michael Meier", "email": "michael.meier@gmail.com", "tag": ["Test", "Noch ein Test", "Noch ein weiterer Test"]},
        {"name": "Fritz Müller", "email": "fritz.mueller@gmail.com", "tag": ["Test", "Noch ein Test"]},
        {"name": "Marco Mendes", "email": "marco.mendez@gmail.com", "tag": ["Test", "Noch ein Test"]},
        {"name": "Maria Navez", "email": "maria.navez@gmail.com", "tag": ["Test", "Noch ein Test", "Noch ein weiterer Test", "Sogar ganz viele Tests"]}
    ]`;

    var data = JSON.parse(sample_data);

    sortSampleDataAlphabetically(data);

    $('table.m-table thead tr > th:nth-child(1)').click(function () {
        switch ($(this).attr('class')) {
            case '-sorted__AtoZ':
                sortSampleDataAlphabeticallyReverse(data);
                break;
            case '-sorted__ZtoA':
                sortSampleDataAlphabetically(data);
                break;
        }
    });
    
});

function loadSampleData(data, sortType) {
            
    $('table.m-table tbody').empty().append(parseObj(data));

    $('table.m-table thead tr > th:nth-child(1)').removeClass().addClass(sortType);

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

function sortSampleDataAlphabetically(data) {
    data.sort(function (a,b) {
        var lowerA = a.name.toLowerCase(), lowerB = b.name.toLowerCase();
        if(lowerA<lowerB) return -1;
        if(lowerA>lowerB) return 1;
        return 0;
    });

    loadSampleData(data, '-sorted__AtoZ');
}

function sortSampleDataAlphabeticallyReverse(data) {
    data.sort(function (a,b) {
        var lowerA = a.name.toLowerCase(), lowerB = b.name.toLowerCase();
        if(lowerA<lowerB) return 1;
        if(lowerA>lowerB) return -1;
        return 0;
    });

    loadSampleData(data, '-sorted__ZtoA');
}