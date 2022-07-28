import {calculateBiorhythms} from './calculations'

it('calculates the physical biorhythm',()=>{
    const {physical}=calculateBiorhythms('1995-01-01','2020-02-18');
    expect(physical).toBeCloseTo(0.5196);
});

it('calculates the emotional biorhythm',()=>{
    const {emotional}=calculateBiorhythms('1995-01-01','2020-02-18');
    expect(emotional).toBeCloseTo(-0.9010);
});

it('calculates the intellactual biorhythm',()=>{
    const {intellactual}=calculateBiorhythms('1995-01-01','2020-02-18');
    expect(intellactual).toBeCloseTo(0.8146);
});