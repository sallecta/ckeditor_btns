CKEDITOR.config.height = 150;
CKEDITOR.config.width = 'auto';

var start_ckeditor = ( function() {
	return function() {
		var editorElement = CKEDITOR.document.getById( 'editor' );
		if ( CKEDITOR.plugins.get( 'wysiwygarea' ) ) {
			CKEDITOR.replace( 'editor' );
		} else {
			editorElement.setAttribute( 'contenteditable', 'true' );
			CKEDITOR.inline( 'editor' );
		}
	};
} )();

