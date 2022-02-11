import Buefy from 'buefy'

import 'buefy/dist/buefy.css'

export default function (Vue, defaultOptions, {head}) {
    if(defaultOptions.links.length) {
        defaultOptions.links.forEach(link => {
            if (link.rel && link.href) head.link.push(link);
        })
    }

    Vue.use(Buefy, defaultOptions.buefyConfig);
}