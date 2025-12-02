const user = require("./model/user-model");
const request = require("supertest");
const app =require("./app");

jest.mock("./model/user-model");

describe("POST /api/users/register", () => {
    it("should return user already exists if email is ridham@gmail.com", async () => {
        user.findOne.mockResolvedValueOnce(true);
        let response = await request(app).post("/api/users/register").send({
            name: "Ridham Garg",
            email: "ridham@gmail.com",
            password: "1234"
        })
        expect(response.body.message).toBe("User already exists");
    })

    it("should create a new user with email ridhamgarg@gmail.com", async () => {
        user.findOne.mockResolvedValueOnce(false);
        user.create.mockResolvedValueOnce({
            name: "Ridham",
            email: "ridhamgarg@gmail.com",
            password: "1234"
        });
        let response = await request(app).post("/api/users/register").send({
            name: "Ridham",
            email: "ridhamgarg@gmail.com",
            password: "1234"
        });
        expect(response.body.message).toBe("User registered successfully");
        expect(response.body.data).toEqual({
            name:"Ridham",
            email:"ridhamgarg@gmail.com",
            password:"1234"
        });
    });
});
