<script setup>
import Button from '@/components/utils/button.vue';
import SecondButton from '@/components/utils/secondaryButton.vue';
import {useRouter} from 'vue-router';

const router = useRouter();
</script>

<template>
    <main>
        <img class="logo-img" src="../assets/Profile.png" alt="">
        <div class="cta-container">
            <img class="splash-img" src="../assets/BoxIcon.png" alt="">
            <h1>Non-Contact Deliveries</h1>
            <p>When placing an order, select the option “Contactless delivery” and the courier will leave your order at the door.</p>
            
            <div class="action-container">
                <RouterLink to="/home">
                    <Button title="Order Now"></Button>
                </RouterLink>
            </div>
            <div class="action-container">
                <RouterLink to="/home">
                    <SecondButton title="DISMISS"></SecondButton>
                </RouterLink>
            </div>    
        </div>
    </main>
</template>

<style scoped>
main{
    background: url("../assets/BG.png");
    height: 100vh;
    background-color: #A259FF;
}

.logo-img{
    margin-top: 2rem;
}

.cta-container{
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
    background-color: #F6F5F5;
    padding: 2rem;
    border-radius: 24px 24px 0 0;
    height: calc(100vh - 148px);
}

.splash-img{
    height: 104px;
    width: 104px;
}

h1{
    margin-top: 24px;
    font-size: 34px;
    font-weight: bold;
    text-align: center;
    color: #2D0C57;
    line-height: 40px;
}

p{
    text-align: center;
    color: #9586A8;
    font-size: 16px;
    margin-top: 12px;

}

.action-container{
    width: 100%;
    margin-top: 8px;
}
</style>