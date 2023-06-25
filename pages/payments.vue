<template>
	<div class="payments gap-x-2 p-[20px] flex flex-col">
		<div class="p-6 rounded-lg bg-white shadow-md flex flex-col w-full gap-y-6 text-xl">
			<div class="payment-container">
				<div>Оплачено</div>
				<div>За что платим</div>
				<div class="text-right">Дата оказания услуги</div>
				<div class="text-right">Цена услуги</div>
			</div>
			<div
				v-for="(payment, index) in payments"
				:key="index"
				class="payment-container"
			>
				<CommonCheckbox :value="payment.payed" disabled/>
				<div>
					{{payment.paymentFor}}
				</div>
				<div class="text-right">
					{{payment.dateOfPayment}}
				</div>
				<div class="text-right">
					{{payment.payAmount}}
				</div>
			</div>
		</div>
		<div class="easter-egg">
			<CommonButton class="text-xl px-5 py-2" @click="eaterEgg" button-text="Нажать, только если вы ну прям очень голодны"/>
		</div>
	</div>
</template>

<script>
import CommonCheckbox from "~/components/common-components/CommonCheckbox.vue";
import CommonButton from "~/components/common-components/CommonButton.vue";

export default {
	name: "payments",
	components: {CommonButton, CommonCheckbox},
	data() {
		return {
			payments: [
				{
					paymentFor: 'Билет на барби с Райаном Гослингом',
					dateOfPayment: '22-06-2023',
					payAmount: 1000,
					payed: true
				},
				{
					paymentFor: 'Оплата интернета за...чем',
					dateOfPayment: '01-06-2023',
					payAmount: 2100,
					payed: false
				},
				{
					paymentFor: 'Абонемент в качалку',
					dateOfPayment: '29-05-2023',
					payAmount: 8800,
					payed: true
				},
				{
					paymentFor: 'Починка брошенного сердца',
					dateOfPayment: '14-02-2023',
					payAmount: 1000000,
					payed: true
				},
				{
					paymentFor: 'Право на сон без снов',
					dateOfPayment: '01-04-2023',
					payAmount: 999,
					payed: true
				},
				{
					paymentFor: 'Программа обучения "Стать супергероем за 24 часа"',
					dateOfPayment: '30-02-2023',
					payAmount: 9999,
					payed: false
				},
				{
					paymentFor: 'Запас энергии на случай приключений',
					dateOfPayment: '31-12-2023',
					payAmount: 2023,
					payed: true
				},
				{
					paymentFor: 'Руководство по переводу мыслей кошек',
					dateOfPayment: '01-04-2023',
					payAmount: 9999,
					payed: true
				}
			],
		}
	},
	methods: {
		eaterEgg() {
			alert('Здесь могла быть ваша реклама доставки еды')
		}
	}
}
</script>

<style scoped>
.payment-container {
	display: grid;
	grid-template-columns: 1fr 10fr 2fr 1fr;
}

.easter-egg {
	opacity: 0;
	margin-top: 20px;
	transition-duration: 0.5s;
	transition-delay: 1s;
	cursor: pointer;
}

.easter-egg:hover {
	opacity: 0.5;
}
</style>