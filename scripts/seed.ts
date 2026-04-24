require("dotenv/config");

const { PrismaClient } = require("@prisma/client");

const db = new PrismaClient({
    datasources: {
        db: {
            url: process.env.DIRECT_URL ?? process.env.DATABASE_URL,
        },
    },
});

async function main() {
    try {
        await db.category.createMany({
            skipDuplicates: true,
            data: [
                {name: "Famous"},
                {name: "Movies & TV"},
                {name: "Anime"},
                {name: "Games"},
                {name: "Philosophy"},
                {name: "Scientists"},
                {name: "History"},
                {name: "Horror"},
                {name: "Books"},
                {name: "Comedy"},
                {name: "Musicians"},
                {name: "Beauty"},
                {name: "Fantasy"},
            ]
        })
    } catch (error) {
        console.error("Error seeding default categories", error)
    }
    finally {
        await db.$disconnect();
    }
}

main();
