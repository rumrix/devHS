<template>
  <q-page class="flex flex-center">
    <div class="q-pa-md bg-grey-10 text-white">
      <q-list
        dark
        padding
        bordered
        class="rounded-borders"
        style="max-width: 328px"
      >
        <q-expansion-item icon="perm_identity" label="Account settings">
          <q-card class="bg-grey-9">
            <q-card-section>
              Lorem ipsum dolor sit amet, consecteur adipisicing elit. Quidem,
              eius reprehenderit eos corrupti commodi magni quaerat ex numquam,
              dolorum officiis modi facere maiores architecto suscipit iste
              eveniet doloribus ullam aliquid.
            </q-card-section>
          </q-card>
        </q-expansion-item>
        <q-expansion-item
          icon="drafts"
          label="Drafts"
          header-class="text-orange"
        >
          <q-card-section>
            Lorem ipsum dolor sit amet, consecteur adipisicing elit. Quidem,
            eius reprehenderit eos corrupti commodi magni quaerat ex numquam,
            dolorum officiis modi facere maiores architecto suscipit iste
            eveniet doloribus ullam aliquid.
          </q-card-section>
        </q-expansion-item>
      </q-list>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
};
</script>
