var $form = $('#formulario'),
	$titulo = $('#titulo'),
	$url = $('#link'),
	$primerPost = $('.item').first(),
	$lista = $('#contenido');

function mostrarOcultarFormulario(){

	$form.slideToggle();
	$lista.slideToggle();
}
function agregarPost(e){
	e.preventDefault();

	var titulo = $titulo.val(),
		url = $url.val(),
		clone = $primerPost.clone();

	clone.find('.titulo_item a')
		.text(titulo)
		.attr('href', url)

	clone.hide()

	$lista.prepend(clone);
	mostrarOcultarFormulario();
	$titulo.val("");
	$url.val("");
	clone.fadein();
}
$('#publicar_nav a').click(mostrarOcultarFormulario);
$('#formulario').on('submit', agregarPost);