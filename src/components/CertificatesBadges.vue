<template>
    <section id="certificates-badges">
        <h2>Certificates & Badges</h2>
        <div id="certificate-badge-list">
            <CredlyBadge v-for="(badge, index) in badges" :key="badge.badgeId" :src="badge.src"
                :publicURL="badge.publicURL" :style="{ animationDelay: `${index * 0.1}s` }" />
        </div>
    </section>
</template>
<script>
import CredlyBadge from './CredlyBadge.vue';
import badge1 from '@/assets/badges/full-stack-cloud-development-capstone-project.png';
import badge2 from '@/assets/badges/ibm-full-stack-software-developer-professional-cert.png';
import badge3 from '@/assets/badges/application-development-using-microservices-and-serverless.png';
import badge4 from '@/assets/badges/web-development-with-html-css-javascript-essentials.png';
import badge5 from '@/assets/badges/node-and-express-essentials.png';
import badge6 from '@/assets/badges/developing-applications-with-sql-databases-and-django.png';
import badge7 from '@/assets/badges/applied-software-engineering-fundamentals.png';
import badge8 from '@/assets/badges/front-end-development-with-react.png';
import badge9 from '@/assets/badges/introduction-to-cloud-computing.png';
import badge10 from '@/assets/badges/container-kubernetes-essentials-v2.png';
import badge11 from '@/assets/badges/python-project-for-ai-and-application-development.png';
import badge12 from '@/assets/badges/python-for-data-science-and-ai.png';
export default {
    components: {
        CredlyBadge,
    },
    data() {
        return {
            badges: [
                { badgeId: '54792ce0-562e-4813-9e0d-a8de00e8846a', src: badge1, publicURL: 'https://www.credly.com/badges/54792ce0-562e-4813-9e0d-a8de00e8846a/public_url' },
                { badgeId: '2dab313d-f4b8-426c-90be-567230fcf146', src: badge2, publicURL: 'https://www.credly.com/badges/2dab313d-f4b8-426c-90be-567230fcf146/public_url' },
                { badgeId: '210453c5-e444-4c1a-83c2-fba1fbfe3e03', src: badge3, publicURL: 'https://www.credly.com/badges/210453c5-e444-4c1a-83c2-fba1fbfe3e03/public_url' },
                { badgeId: '3cdbdc33-a65b-4de8-b0e9-c0f50cd19bc1', src: badge4, publicURL: 'https://www.credly.com/badges/3cdbdc33-a65b-4de8-b0e9-c0f50cd19bc1/public_url' },
                { badgeId: '207cb15b-e555-47e7-aaf6-e3b633f920af', src: badge5, publicURL: 'https://www.credly.com/badges/207cb15b-e555-47e7-aaf6-e3b633f920af/public_url' },
                { badgeId: '3a13f5e2-c329-44a2-86c1-24a66ad629b3', src: badge6, publicURL: 'https://www.credly.com/badges/3a13f5e2-c329-44a2-86c1-24a66ad629b3/public_url' },
                { badgeId: '6007b77b-a2f2-4032-a3bd-9a9473d3dada', src: badge7, publicURL: 'https://www.credly.com/badges/6007b77b-a2f2-4032-a3bd-9a9473d3dada/public_url' },
                { badgeId: '7f2f7ed1-56a5-42b5-beb9-9170d31ab9f4', src: badge8, publicURL: 'https://www.credly.com/badges/7f2f7ed1-56a5-42b5-beb9-9170d31ab9f4/public_url' },
                { badgeId: 'fca3d758-860f-413e-937f-5596d41c5eef', src: badge9, publicURL: 'https://www.credly.com/badges/fca3d758-860f-413e-937f-5596d41c5eef/public_url' },
                { badgeId: '560b8b7b-d9ea-43f8-94b8-15ed006228b6', src: badge10, publicURL: 'https://www.credly.com/badges/560b8b7b-d9ea-43f8-94b8-15ed006228b6/public_url' },
                { badgeId: '824ff847-ab82-4a55-9f25-73aa82ab101f', src: badge11, publicURL: 'https://www.credly.com/badges/824ff847-ab82-4a55-9f25-73aa82ab101f/public_url' },
                { badgeId: '7d7c40d8-f96d-4f03-a03a-be1a8e5061ce', src: badge12, publicURL: 'https://www.credly.com/badges/7d7c40d8-f96d-4f03-a03a-be1a8e5061ce/public_url' },
            ],
        };
    },

};
</script>
<style>
#certificates-badges {
    box-sizing: border-box;
    padding: 1rem;
    width: 100%;
}

#certificate-badge-list {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    grid-template-rows: repeat(6, minmax(0, 1fr));
    box-sizing: border-box;
    gap: 1rem;
    width: 100%;
}

@keyframes slideIn {
    0% {
        transform: translateX(-100%);
        opacity: 0;
    }

    100% {
        transform: translateX(0);
        opacity: 1;
    }
}

.animate-certificates .credly-badge {
    animation: slideIn 0.3s forwards;
    animation-fill-mode: backwards;
}


@media only screen and (min-width: 768px) {
    #certificates-badges h2{
        font-size: 2rem;
    }
    #certificate-badge-list{
        gap: 2;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        grid-template-rows: repeat(4, minmax(0, 1fr));
    }
}

@media only screen and (min-width: 1100px) {
    #certificates-badges {
        padding: 3rem;
        height: 100dvh;
        min-height: 100dvh;
    }

    #certificates-badges h2{
        margin-top: 0;
        font-size: 3rem;
    }

    #certificate-badge-list {
        padding-inline: 3rem;
        gap: 1.5rem;
        grid-template-columns: repeat(4, minmax(0, 1fr));
    }
}
</style>