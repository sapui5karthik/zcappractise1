sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'emp/zfioricustompageapp/test/integration/FirstJourney',
		'emp/zfioricustompageapp/test/integration/pages/EmpSetMain'
    ],
    function(JourneyRunner, opaJourney, EmpSetMain) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('emp/zfioricustompageapp') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheEmpSetMain: EmpSetMain
                }
            },
            opaJourney.run
        );
    }
);