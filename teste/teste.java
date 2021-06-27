import java.util.Scanner;

public static void main(String[] args) {
    int pista, voltas, qtd_abastecimentos ,consumo;
    float voltasParadas, reabastecimento;
    Scanner sc = new Scanner(System.in);

    System.out.println("Qual o comprimento da pista em metros ?");
    pista = sc.nextInt();

    System.out.println("Quantas voltas serem pecorridas ?");
    voltas = sc.nextInt();

    System.out.println("Quantas vezes será reabastecido ?");
    qtd_abastecimentos = sc.nextInt();

    System.out.println("Qual o consumo de combustivel (KM/L) ?");
    consumo = sc.nextInt();

    voltasParadas = voltas/qtd_abastecimentos;

    reabastecimento = voltasParadas *(pista)

    System.out.print("Total de combustivel até o 1º reabastecimento " + reabastecimento + "litros")


}