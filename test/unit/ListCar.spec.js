import { mount } from "@vue/test-utils";
import ListCar from "../../src/components/ListCar.vue";
    
describe("created", () => {
    test("when the page is loaded, the table is populated ith cars from the db", () => {
        const wrapper = mount(ListCar)
        console.log(wrapper.vm)
        const cars = wrapper.vm.$data.Cars
        expect(cars.length).toBeGreaterThanOrEqual(1);
    });
});