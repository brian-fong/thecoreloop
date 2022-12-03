// Sets delay for <time> number of milliseconds
export function sleep(time: number) {
    return new Promise( resolve => setTimeout(resolve, time) );
}

