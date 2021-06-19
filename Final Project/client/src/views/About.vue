<template>
    <div class="about">
        <Navbar />
        <div class="container mt-4">
            <div class="container topShelf">
                <h1 class="h3">
                    Welcome to the <b>Galaxy NTF Marketplace</b> <br />
                    <small>Created by Shameen R Yaseer</small>
                </h1>
            </div>
            <div class="row middlShelf d-flex align-items-center">
                <div class="col-sm">
                    <h1 class="h5">
                        The idea of this website is a marketplace and social media page where NTF enthusiast and Cryptocurrency fanatics can Buy, Sell, Trade their Digital
                        Assets without the struggles of Big Bank regulations and centralized big money tactics
                    </h1>
                </div>
                <div class="col-sm ">
                    <img src="https://compote.slate.com/images/926e5009-c10a-48fe-b90e-fa0760f82fcd.png?" />
                </div>
            </div>

            <div class="faq">
                <h1 class="h5"><b>Frequenly Asked Questions:</b></h1>
            </div>
            <div class="row faqContent ">
                <!-- Question 1-->
                <div class="text-semibold pad-hor text-lg row">
                    <h5>Q. How do you register an Account?</h5>
                </div>
                <!-- Answer -->
                <div>
                    <div class="text row">
                        In the home page, you will need to nagivate to the url http://localhost:8080/register for the quickest method, but if you wish to log out and create a
                        new user you will see there is a Logout button which will redirect you to the login page. Use these two methods in order to go back to the beginning.
                    </div>
                </div>
                <!-- Question 2-->
                <div class="text-semibold pad-hor text-lg row mt-2">
                    <h5>Q. How does Galaxy NTF Marketplace make their money?</h5>
                </div>
                <!-- Answer -->
                <div>
                    <div class="text row">
                        We believe in giving people the ability to earn all the profits they deserve, so on every transaction we take a small transaction fee which is miniscul
                        to the original transaction amount. Our rates are 0.002 cents on the dollar of the order.
                    </div>
                </div>
                <!-- Question 3-->
                <div class="text-semibold pad-hor text-lg row mt-2">
                    <h5>Q. What is the function of the Home Page?</h5>
                </div>
                <!-- Answer -->
                <div>
                    <div class="text row">
                        Our goal for this website is to create a marketplace where users can display a asset that they want to sell, and just like a marketplace, you, as a
                        customer can see what is on the market for sale and make an offer on it or buy it instantly.
                    </div>
                </div>
                <!-- Question 4-->
                <div class="text-semibold pad-hor text-lg row mt-2">
                    <h5>Q. Can you gaurentee the transaction is safe</h5>
                </div>
                <!-- Answer -->
                <div>
                    <div class="text row">
                        Our system use a series of validation transaction and blockchain technology in order to process,validate, and document every transaction that takes
                        place in this website. Surely enough, we can gaurentee all transactions that is done here.
                    </div>
                </div>
                <!-- Question 5-->
                <div class="text-semibold pad-hor text-lg row mt-2">
                    <h5>Q. How does your App work?</h5>
                </div>
                <!-- Answer -->
                <div>
                    <div class="text row">
                        This app is meant to be a social media platform where users can socialise amongst it's users and also provide financial services where you can make
                        transactions through a digital wallet. We are soon to implement the Marketing side of our application as for now we are finished up with our Social
                        media side. Our Goal is to create a social marketplace where people can buy, sell, and trade their digital assets.
                    </div>
                </div>
                <!-- Question 6-->
                <div class="text-semibold pad-hor text-lg row mt-2">
                    <h5>Q. How do I update my user information?</h5>
                </div>
                <!-- Answer -->
                <div>
                    <div class="text row">
                        For now we are only allowing users to update their contact information and their email address. This can be done by navigating to the Searh User Page
                        where you will be able to input your email address. This will repopulate the Update Form with your information and after your adjustments, you can
                        update your information with the click of a button.
                    </div>
                </div>
                <!-- Question 7-->
                <div class="text-semibold pad-hor text-lg row mt-2">
                    <h5>Q. How do I delete my account?</h5>
                </div>
                <!-- Answer -->
                <div>
                    <div class="text row">
                        This can be done by navigating to the Searh User Page where you will be able to input your email address. This will repopulate the Update Form with
                        your information and then you can delete your information with the click of a button.
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '../components/Navbar.vue';

export default {
    name: 'About',
    created() {
        document.title = 'About Page';
    },
    components: {
        Navbar
    }
};
</script>

<style scoped>
img {
    width: 99%;
    height: 99%;
}
.topShelf {
    border-bottom: double;
    padding-bottom: 1em;
}
.middlShelf {
    border-bottom: double;
    padding: 1em 1em;
}
.faq {
    padding-top: 1em;
}
.faqContent {
    border-bottom: double;
    padding-bottom: 1em;
    display: flex;
}
.textBox {
    white-space: pre-wrap;
}
</style>
