var data = 
[
    {
        "id": 10001,
        "birthDate": "1953-09-01",
        "firstName": "Georgi",
        "lastName": "Facello",
        "gender": "M",
        "hireDate": "1986-06-25",
      },
      {
        "id": 10002,
        "birthDate": "1964-06-01",
        "firstName": "Bezalel",
        "lastName": "Simmel",
        "gender": "F",
        "hireDate": "1985-11-20",
      },
      {
        "id": 10003,
        "birthDate": "1959-12-02",
        "firstName": "Parto",
        "lastName": "Bamford",
        "gender": "M",
        "hireDate": "1986-08-27T22:00:00.000+0000",
      },
      {
        "id": 10004,
        "birthDate": "1954-04-30",
        "firstName": "Chirstian",
        "lastName": "Koblick",
        "gender": "M",
        "hireDate": "1986-11-30",
    
      },
      {
        "id": 10005,
        "birthDate": "1955-01-20",
        "firstName": "Kyoichi",
        "lastName": "Maliniak",
        "gender": "M",
        "hireDate": "1989-09-11T22:00:00.000+0000",
    
      }
];

$(document).ready(function() 
{
    
    disegnaRighe();

    function disegnaRighe()
    {
        var riga = "";
        
        for(var i = 0; i < data.length; i++)
        {
            riga += "<tr> <th scope='row'>" + data[i].id + "</th> " + " <td>" + data[i].firstName + "</td> " +
            " <td>" + data[i].lastName + "</td> " + " <td data-id = " + data[i].id + ">" + "<button type='button' class='btn btn-danger btn-sm px-3 elimina'> Elimina </button> </td> </tr>";
        }

        $("tbody").html(riga);
    };

    $('.elimina').bind('click', function (e)
    {
        var idElimina = $(this).parent("td").data("id");
        
        for(var i = 0; i < data.length; i++)
        {
            if(data[i].id == idElimina)
            {
              data.splice(i,1);
              break;
            }
        }
        alert("Ho Eliminato La Riga");
        disegnaRighe();
    });
});