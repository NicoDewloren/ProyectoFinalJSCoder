function dibujarNosotros() {

    let nosotros = document.getElementById("nosotros")

    let contenido = `<h1 class="letra-titulos">Historia de Gaming World ®</h1>
    <p class="letra mt-5">Gaming World ® inició sus actividades en el año 2009, fundada por dos jóvenes emprendedores argentinos.

        El primer comercio se estableció en la ciudad de Morón, Gran Buenos Aires, y la actividad principal era el soporte técnico informático. El negocio funcionaba como un taller de reparación, brindando servicios en las zonas aledañas, pero con el tiempo fue creciendo y comenzó a diversificarse, incorporando todo tipo de hardware para PC. Se crearon también cuentas en MercadoLibre y Facebook, seguidas de una página web, lo que permitió que la empresa se acerque más a sus clientes y promocione sus productos y servicios en Internet.</p>          
</div>
<p class="letra mt-3">En el año 2013 dio su paso más grande al abrir su segunda sucursal en Capital Federal, ubicada en el barrio de Flores. Este nuevo proyecto ponía en funcionamiento un local varias veces más grande que el anterior, acercando a muchos potenciales nuevos clientes.

    El éxito alcanzado luego de su apertura llevó a mudar la histórica sucursal de Morón, saliendo esta vez de la galería en que se encontraba y abriendo en un comercio mucho más amplio a la calle. El objetivo era ampliar la cartera de clientes aún más y fortalecer la presencia en la zona.</p>`

    nosotros.innerHTML = contenido
}

dibujarNosotros();