import nodal1 from '/src/static/Execom/nodel1.jpg'
import nodal2 from '/src/static/Execom/nodel2.jpg'
import grp11 from '/src/static/Execom/grp11.jpg'
import grp12 from '/src/static/Execom/grp12.jpg'
import grp13 from '/src/static/Execom/grp13.jpg'
import grp14 from '/src/static/Execom/grp14.jpg'
import grp21 from '/src/static/Execom/grp21.jpg'
import grp22 from '/src/static/Execom/grp22.jpg'
import grp23 from '/src/static/Execom/grp23.jpg'
import grp24 from '/src/static/Execom/grp24.jpg'

import grp31 from '/src/static/Execom/grp31.jpg'
import grp32 from '/src/static/Execom/grp32.jpg'
import grp33 from '/src/static/Execom/grp33.jpg'
import grp34 from '/src/static/Execom/grp34.jpg'


import grp41 from '/src/static/Execom/grp41.jpg'
import grp42 from '/src/static/Execom/grp42.jpg'
import grp43 from '/src/static/Execom/grp43.jpg'
import grp44 from '/src/static/Execom/grp44.jpg'

import grp51 from '/src/static/Execom/grp51.jpg'
import grp52 from '/src/static/Execom/grp52.jpg'

export type Lead = {
    name: string;
    imgeUrl: string;
    position: string;
};

function useExecomData() {

    const nodalOfficers: Lead[] = [{ name: 'Prof. Muhammed Anees V V', imgeUrl: nodal1, position: "Nodal Officer" },
    { name: 'Prof. Jiji J K', position: 'Nodal Officer', imgeUrl: nodal2 }
    ];

    const group1: Lead[] = [{ name: 'Adish V', imgeUrl: grp11, position: 'Student Lead' }, { name: 'Swathika S', imgeUrl: grp51, position: 'Student Lead' }, { name: 'Ancia Manoj', imgeUrl: grp13, position: 'Finance Lead' }, { name: 'K Sneha Sudheesh', imgeUrl: grp31, position: 'Finance Lead' },]
    const group2: Lead[] = [{ name: 'Neshwa P R', imgeUrl: grp42, position: 'Community Lead' }, { name: 'Gopika Sudheer', imgeUrl: grp23, position: 'Community Lead' }, { name: 'Ishan Munna', imgeUrl: grp24, position: 'Design Lead' }, { name: 'Mohamed Aaqib', imgeUrl: grp34, position: 'Design Lead' }]
    const group3: Lead[] = [{ name: 'Abhiraman A V', imgeUrl: grp12, position: "Marketing Lead" }, { name: 'Karthika Satheesh', imgeUrl: grp32, position: 'Creative and Innovation Lead' }, { name: 'Meenakshi R', imgeUrl: grp33, position: 'Social Media Administrator' }, { name: 'Arathi V M', imgeUrl: grp21, position: 'IPR & Research Lead.' }]
    const group4: Lead[] = [{ name: 'Najma Nargis P T', imgeUrl: grp41, position: 'Women Enterpreneurship Lead' }, { name: 'Sahala Yasmeen', imgeUrl: grp43, position: 'Branding Lead' }, { name: 'Sourav Surendran', imgeUrl: grp44, position: 'Video Design Lead' }, { name: 'Devika Sudheer', imgeUrl: grp22, position: 'Technology Lead' },]
    const group5: Lead[] = [{ name: 'Arsha Satheesh', imgeUrl: grp14, position: 'Quality and Operation Lead' }, { name: 'Tom Sebastian', imgeUrl: grp52, position: 'Web Master' }]

    return { nodalOfficers, group1, group2, group3, group4, group5 }
}

export default useExecomData;
