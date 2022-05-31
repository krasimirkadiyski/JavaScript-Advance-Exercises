function modifieProperties(obj) {
    if (obj.dizziness) {
        obj.dizziness = false;
        let neededHydrated = obj.levelOfHydrated + ((obj.weight * 0.1) * obj.experience);
        obj.levelOfHydrated = neededHydrated;
    }
    return obj;
}
console.log(modifieProperties({
    weight: 120,
    experience: 20,
    levelOfHydrated: 200,
    dizziness: true
}));