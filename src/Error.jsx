import React from "react";

// The Error component displays a 403 Forbidden error message
function Error() {
    return (
        // The main container div with padding set to 20% for centering the content
        <div id="app" style={{padding:"20%"}}>
            
            {/* Displays the 403 error code */}
            <div>403</div>
            
            {/* Displays the "Forbidden" text with a blinking cursor effect */}
            <div className="txt">
                Forbidden<span className="blink">_</span>
            </div>
        </div>
    );
} 

// Exporting the Error component for use in other parts of the application
export default Error;
