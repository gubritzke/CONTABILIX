<?php include "partials/header.phtml" ?>
<link href="./assets/css/quanto.css" media="screen" rel="stylesheet" type="text/css">
<link href="./assets/css/responsive/quanto-custa-responsive.css" media="screen" rel="stylesheet" type="text/css">

<div id="calculadora" class="bg-blue-900">
    <div class="content">
        <div class="row no-gutters">
            <div class="col-md-12 col-lg-6">
                <div class="left-calc">
                    <p class="font-g cl-white text-icon">
                        <img src="../assets/img/calculadora/icon.svg" />
                        Simule quanto você vai pagar por mês para resolver toda a contabilidade da sua empresa.
                    </p>

                    <span class="cl-green-200 font-g f-weight-700 se-vc">
                        Se você já tem empresa troque já de contador!
                    </span>

                    <div class="texts-calc">
                        <span class="font-m cl-yellow-100 f-weight-700">
                            Se faturar menos, paga menos
                        </span>
                        <p class="font-m cl-white">
                            Sua mensalidade varia com o faturamento mensal.
                        </p>
                    </div>

                    <div class="texts-calc">
                        <span class="font-m cl-yellow-100 f-weight-700">
                            Não cobramos 13º
                        </span>
                        <p class="font-m cl-white">
                            Sua empresa paga apenas as mensalidades.
                        </p>
                    </div>

                    <div class="texts-calc">
                        <span class="font-m cl-yellow-100 f-weight-700">
                            O 1º mês é grátis!
                        </span>
                        <p class="font-m cl-white">
                            Você experimenta e economiza.
                        </p>
                    </div>

                    <div class="texts-calc">
                        <span class="font-m cl-yellow-100 f-weight-700">
                            Atendimento Multicanal
                        </span>
                        <p class="font-m cl-white">
                            Todos os clientes tem direito a atendimento via Telefone e Whatsapp.
                        </p>
                    </div>

                    <a onclick="$('body').addClass('fixed');" href="javascript:;" data-iframe="teste" class="bt open-modal bg-blue-400 cl-white f-weight-700">VEJA OS SERVIÇOS INCLUSOS NA SUA MENSALIDADE</a>
                </div>
            </div>

            <div class="col-md-12 col-lg-6">
                <form method="post" class="row no-gutters calculadora">
                    <div class="bg form-full col-12 row bg-white box-form-rd no-gutters">
                        <a class="calc-info desk-none" onclick="$('body').addClass('fixed');">?</a>
                        <label class="col-6">
                            <span class="title-form font-m cl-gray-300 f-weight-700 ajuste-mg-mobal-center">Tipo da sua empresa</span>
                            <input type="radio" name="tipoempresa" id="servico" value=" Empresa Prestadora de Serviço"
                                   checked><label class="free-label four col" for="servico">Serviço</label>
                        </label>

                        <label class="col-6" align="right">
                            <span class="title-form font-m cl-gray-300 f-weight-700">&nbsp;</span>
                            <span class="calc-info mb-none" onclick="$('body').addClass('fixed');">?</span>
                            <input type="radio" name="tipoempresa" id="comercio" value=" Empresa de Comércio"><label
                                    class="free-label four col" for="comercio">Comércio</label>
                        </label>

                        <label class="col-6">
                            <span class="title-form font-m cl-gray-300 f-weight-700 ajuste-mg-mobal-center">Regime tributário</span>
                            <input type="radio" name="regimetributario" id="simples" value="Simples Nacional"
                                   checked><label class="free-label four col" for="simples">Simples Nacional</label>
                        </label>

                        <label class="col-6" align="right">
                            <span class="title-form font-m cl-gray-300 f-weight-700">&nbsp;</span>
                            <input type="radio" name="regimetributario" id="lucro" value="Lucro Presumido"><label
                                    class="free-label four col" for="lucro">Lucro Presumido</label>
                        </label>

                        <label class="col-12">
                            <span class="title-form font-m cl-gray-300 f-weight-700">Quantidade de funcionários</span>
                            <img src="assets/img/calculadora/icon-triangulo2.svg" class="desk-none ic-ipt" />
                            <img src="assets/img/calculadora/icon-triangulo2.svg" class="mb-none ic-ipt" />
                            <select class="bg-gray-200" name="funcionarios">
                                <option value="0">0</option>
                                <option value="1">1</option>
                            </select>
                        </label>

                        <div class="col-12">
                            <span class="title-form font-m cl-gray-300 f-weight-700">Faturamento médio mensal da
                                empresa</span>
                        </div>
                        <label class="col-4">
                            <input checked type="radio" name="faturamento" id="020" value="0 a 20"><label
                                    class="free-label four col" for="020">0 a 20</label>
                        </label>

                        <label class="col-4">
                            <input type="radio" name="faturamento" id="2040" value="20 a 40"><label
                                    class="free-label four col" for="2040">20 a 40</label>
                        </label>

                        <label class="col-4">
                            <input type="radio" name="faturamento" id="40300" value="40 a 300"><label
                                    class="free-label four col" for="40300">40 a 300</label>
                        </label>
                    </div>

                    <div class="col-12 no-gutters row bg-green-200 box-valor-rd">
                        <div class="box-valor col-12" align="center">
                            <span class="font-m cl-white f-weight-700">Valor da Mensalidade para sua empresa</span>
                            <p class="font-m cl-green-400 f-weight-700">R$ <span class="cl-white font-xg">98,00</span>
                            </p>
                        </div>
                    </div>

                </form>
            </div>
        </div>
    </div>
</div>

<div id="quanto-custa">
    <div class="content">
        <div class="row no-gutters bg-green-400 greenbox">
            <div class="col-lg-6 col-md-12">
                <span class="cl-white f-weight-700">Quanto custa abrir sua empresa?</span>
                <div class="bg-blue-700 bg-gratis">
                    <span class="font-xg cl-white f-weight-700">É GRÁTIS!</span>
                </div>
                <p class="font-m cl-white list"><span class="bullet cl-yellow-100">•</span> Abrimos sua empresa online sem nenhuma burocracia e não cobramos nada por isso, <b>você pagará apenas as taxas do governo</b>.</p>
                <p class="font-m cl-white list"><span class="bullet cl-yellow-100">•</span> Nossos contadores indicarão o tipo de empresa correto <b>para você pagar o mínimo de impostos após a abertura</b>.</p>
                <p class="font-m cl-white list"><span class="bullet cl-yellow-100">•</span> <b>Sem Fidelidade!</b> Confiamos tanto em nosso serviço que deixamos os clientes sempre livres.</p>

                <div class="buttons">
                    <a href="javascript:;" class="bt bg-white cl-green-300 font-s">SAIBA MAIS</a>
                </div>
            </div>
            <div class="col-lg-6 col-md-12 mb-none">
                <img src="assets/img/quanto/image.png">
            </div>

        </div>
    </div>
</div>



<?php include "partials/footer.phtml" ?>
