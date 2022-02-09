$(document).ready(function () {
    var sample_data = `[
        {"name": "Louis Born", "email": "louis.born@gmail.com", "tag": ["Test", "Noch ein Test"]}, 
        {"name": "Max Mustermann", "email": "max.mustermann@gmail.com", "tag": ["Test"]}, 
        {"name": "Michael Meier", "email": "michael.meier@gmail.com", "tag": ["Test", "Noch ein Test", "Noch ein weiterer Test"]},
        {"name": "Fritz Müller", "email": "fritz.mueller@gmail.com", "tag": ["Test", "Noch ein Test"]},
        {"name": "Marco Mendes", "email": "marco.mendez@gmail.com", "tag": ["Test", "Noch ein Test"]},
        {"name": "Maria Navez", "email": "maria.navez@gmail.com", "tag": ["Test", "Noch ein Test", "Noch ein weiterer Test", "Sogar ganz viele Tests"]},
        {"name": "Marco Mendes", "email": "marco.mendez@gmail.com", "tag": ["Test", "Noch ein Test"]},
        {"name": "Marco Mendes", "email": "marco.mendez@gmail.com", "tag": ["Test", "Noch ein Test"]}
    ]`;

    var data = JSON.parse(sample_data);

    countEntriesAndDisplay(data);

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
            </tr >`;   
        
        });
        return toAppend;
    }
}

function countEntriesAndDisplay(data) {
    var number = data.length;
    var toAppend = `
        <p>Eingetragene Adressen: ` + number + `</p>
    `;
    $('section.content-section__page_subtitle').append(toAppend);
}

function displayUpdateSection(index, obj) {
    $('section.content-section__update').children().remove();
    $('table.m-table tr[class="-selected-table"]').removeClass();
    var toAppend = '';

    toAppend = `
        <div class="update-area">
            <h1>${index}</h1>
            <div class="action-area">
            <button class="a-button -secondary">
                <div class="a-button__label">Update</div>
            </button>
            <button class="a-button -tertiary">
                <div class="a-button__label">Löschen</div>
            </button>
            </div>
        </div>
    `;

    $('table.m-table td:contains(' + index + ')').parent('tr').addClass('-selected-table');
    $('section.content-section__update').append(toAppend);
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