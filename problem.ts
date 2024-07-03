let wall1: number[][] = [[3, 5, 1, 1], [2, 3, 3, 2], [5, 5], [4, 4, 2], [1, 3, 3, 3], [1, 1, 6, 1, 1]];
let wall2: number[][] = [[1], [1], [1]];
let wall3: number[][] = [[100000000], [100000000], [100000000]];
let wall4 = [[7, 1, 1, 1], [1, 4, 2, 3], [7, 3]];
let wall5 = [[100000000, 100000000], [100000000, 100000000]];
let wall6 = [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]];
let wall7 = [[6, 2, 2], [1, 4, 4, 1], [2, 5, 3]];
let wall8 = [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]];
let wall9 = [[1]];

assertEquals(leastBricks(wall1), 2, "Wall 1")
assertEquals(leastBricks(wall2), 3, "Wall 2")
assertEquals(leastBricks(wall3), 3, "Wall 3")

assertEquals(leastBricks(wall4), 0, "Wall 4")
assertEquals(leastBricks(wall5), 0, "Wall 5")
assertEquals(leastBricks(wall6), 0, "Wall 6")
assertEquals(leastBricks(wall7), 2, "Wall 7")
assertEquals(leastBricks(wall8), 0, "Wall 8")
assertEquals(leastBricks(wall9), 1, "Wall 9")


function leastBricks(wall: number[][]): number {

    let wallWidth = wall[0].reduce((acc, current) => acc + current, 0)
    let occ = new Map<number, number>;
    let uniqueBricks = new Set<number>();
    let globalCount: number = 0;

    if (wall.length === 1 && wall[0].length > 1) {
        return 0;
    }
    if (wall.length === 1 && wall[0].length === 1) {
        return 1;
    }

    for (let row in wall) {
        let index = 0;
        for (let brick of wall[row]) {
            index += brick;
            uniqueBricks.add(brick);
            if (index < wallWidth) {
                if (occ.has(index)) {
                    let count = occ.get(index) + 1;
                    occ.set(index, count)
                    if (count > globalCount) {
                        globalCount = count;
                    }
                } else {
                    occ.set(index, 1);
                }
            }
        }

    }
    let result = wall.length - globalCount;

    if (globalCount === 0 && uniqueBricks.size > 1) {
        result -= 1;
    }

    return result
}

function assertEquals(is: number, toBe: number, name: string) {
    console.assert(is === toBe, "Name: " + name + " - Expected " + toBe + " is not equal to " + is)
}
