const { z } = require("zod");

const CreateSchema = z.object({
    body: z.object({
        name: z.string().min(1, "Name is required"),
        email: z.string().min(1, "Email is required").email("Invalid email address"),
    })
});

module.exports = {
    CreateSchema
};
