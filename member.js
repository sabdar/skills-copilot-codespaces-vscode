function skillsMember() {
    var member = {
        name: "John",
        age: 30,
        skills: ["JavaScript", "HTML", "CSS"],
        salary: 4000
    };
    console.log(member.skills);
    member.skills.push("React");
    console.log(member.skills);
    member.skills.splice(2, 1);
    console.log(member.skills);
    member.skills.splice(1, 0, "SQL");
    console.log(member.skills);
    member.skills.splice(2, 1, "Bootstrap", "MongoDB");
    console.log(member.skills);
    member.skills.splice(0, 1);
    console.log(member.skills);
    member.skills.splice(0, 0, "Git");
    console.log(member.skills);
    member.skills.splice(0, 1, "Python");
    console.log(member.skills);
    member.skills.splice(0, 0, "C++", "C#");
    console.log(member.skills);
    member.skills.splice(3, 2);
    console.log(member.skills);
    member.skills.splice(3, 0, "Assembly");
    console.log(member.skills);
    member.skills.splice(4, 1);
    console.log(member.skills);
    member.skills.splice(4, 0, "Java");
    console.log(member.skills);
    member.skills.splice(5, 1);
    console.log(member.skills);
    member.skills.splice(5, 0, "PHP");
    console.log(member.skills);
    member.skills.splice(6, 1);
    console.log(member.skills);
    member.skills.splice(6, 0, "C");
    console.log(member.skills);
    member.skills.splice(7, 1);
    console.log(member.skills);
    member.skills.splice(7, 0, "Ruby");
    console.log(member.skills);
    member.skills.splice(8, 1);
    console.log(member.skills);
    member.skills.splice(8, 0, "Swift");
    console.log(member.skills);
    member.skills.splice(9, 1);
    console.log(member.skills);
    member.skills.splice(9, 0, "R");
    console.log(member.skills);
    member.skills.splice(10, 1);
    console.log(member.skills);
    member.skills.splice(10, 0, "Go");
    console.log(member.skills);
    member.skills.splice(11, 1);
    console.log(member.skills);
    member.skills.splice(11, 0, "Kotlin");
    console.log(member.skills);
}