var manager = ( function () {

    var instance;

    function init () {

        var toggleCodeSnippet,
			codeSnippets = document.querySelectorAll(".embedPastebin");

		toggleCodeSnippet = function toggleCodeSnippet ( e ) {
			var btn = this,
				codeSnippet = btn.nextElementSibling.nextElementSibling.nextElementSibling,
				isHidden = codeSnippet.classList.contains( "is-hidden" );
			if ( isHidden ) {
				codeSnippet.classList.remove( "is-hidden" );
				btn.innerText = "Hide Code";
			} else {
				codeSnippet.classList.add( "is-hidden" );
				btn.innerText = "View Code";
			}
		};

		// Hack delay thing for settings up JSBins' toggle
		for ( var i = 0; i < codeSnippets.length; i++ ) {
			codeSnippets[ i ].className += " is-hidden";
		}

        return {
            toggleCodeSnippet : toggleCodeSnippet
        };

    }

    return {
        getInstance : function () {
            if ( !instance ) {
                instance = init();
            }
            return instance;
        }
    }

} ) ();

window.ONEOK = manager.getInstance();
